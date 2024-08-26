import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Dragging = () => {
  const [items, setItems] = useState([
    {
      id: '1',
      name: truncateString('dosa', 14),
      code: '12345',
      pricingdetails: {
        Dinein1: { Ac: "$100", NonAc: "$100" },
        Pickup1: { Inhouse: "$100", Swiggy: "$100", Zomato: "$100" },
        Delivery1: { Inhouse: "$100", Swiggy: "$100", Zomato: "$100" },
        Dinein2: { Ac: "$100", NonAc: "$100" },
        Pickup2: { Inhouse: "$100", Swiggy: "$100", Zomato: "$100" },
        Delivery2: { Inhouse: "$100", Swiggy: "$100", Zomato: "$100" },
        Inventory1: { Total: "$1000", Threshold: "$100" },
        Customize1: { customize: "$5" }
      }
    },
    {
      id: '2',
      name: truncateString('Mushroo', 14),
      code: '12345',
      pricingdetails: {
        Dinein1: { Ac: "$100", NonAc: "$100" },
        Pickup1: { Inhouse: "$100", Swiggy: "$100", Zomato: "$100" },
        Delivery1: { Inhouse: "$100", Swiggy: "$100", Zomato: "$100" },
        Dinein2: { Ac: "$100", NonAc: "$100" },
        Pickup2: { Inhouse: "$100", Swiggy: "$100", Zomato: "$100" },
        Delivery2: { Inhouse: "$100", Swiggy: "$100", Zomato: "$100" },
        Inventory1: { Total: "$1000", Threshold: "$100" },
        Customize1: { customize: "$5" }
      }
    },
    // More items...
  ]);
  const [itemsfood, setItemsfood] = useState([
    {
      id: '1',
      name: truncateString('dosa', 14),
      code: '12345',
      pricingdetails: {
        Dinein1: { Ac: "$100", NonAc: "$100" },
        Pickup1: { Inhouse: "$100", Swiggy: "$100", Zomato: "$100" },
        Delivery1: { Inhouse: "$100", Swiggy: "$100", Zomato: "$100" },
        Dinein2: { Ac: "$100", NonAc: "$100" },
        Pickup2: { Inhouse: "$100", Swiggy: "$100", Zomato: "$100" },
        Delivery2: { Inhouse: "$100", Swiggy: "$100", Zomato: "$100" },
        Inventory1: { Total: "$1000", Threshold: "$100" },
        Customize1: { customize: "$5" }
      }
    },
    {
      id: '2',
      name: truncateString('Mushroo', 14),
      code: '12345',
      pricingdetails: {
        Dinein1: { Ac: "$100", NonAc: "$100" },
        Pickup1: { Inhouse: "$100", Swiggy: "$100", Zomato: "$100" },
        Delivery1: { Inhouse: "$100", Swiggy: "$100", Zomato: "$100" },
        Dinein2: { Ac: "$100", NonAc: "$100" },
        Pickup2: { Inhouse: "$100", Swiggy: "$100", Zomato: "$100" },
        Delivery2: { Inhouse: "$100", Swiggy: "$100", Zomato: "$100" },
        Inventory1: { Total: "$1000", Threshold: "$100" },
        Customize1: { customize: "$5" }
      }
    },
    // More items...
  ]);


  const [nooftypes, setnooftypes] = useState([
    {
      id: 1,
      food: "one",
      name: items,
    },
    {
      id: 2,
      food: "two",
      name: itemsfood,
    },
  ]);
  const flattenPricingDetails = (pricingdetails) => {
    const result = [];
    for (const [category, details] of Object.entries(pricingdetails)) {
      for (const [key, value] of Object.entries(details)) {
        result.push({ category, key, value });
      }
    }
    return result;
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const reorderedItems = Array.from(items);
    const [movedItem] = reorderedItems.splice(source.index, 1);
    reorderedItems.splice(destination.index, 0, movedItem);

    setItems(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>

      <div></div>

      <Droppable droppableId="table-1">
        {(provided) => (
          <table
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ width: '400px', borderCollapse: 'collapse' }}
          >
            <thead >
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Code</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <tr
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        border: '1px solid #ccc',
                        background: '#f9f9f9',
                      }}
                    >
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.code}</td>
                    </tr>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </tbody>
          </table>
        )}
      </Droppable>

      <Droppable droppableId="table-2">
        {(provided) => (
          <table
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Values</th>
              </tr>
            </thead>
            <tbody>
              {items.map((data, index) => {
                const flattenedDetails = flattenPricingDetails(data.pricingdetails);

                return (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>
                      <table style={{ width: '100%' }}>
                        <tbody>
                          <tr>
                            {flattenedDetails.map((details, detailIndex) => (
                              <td
                                key={detailIndex}
                                style={{
                                  border: '1px solid #ccc',
                                  background: '#f9f9f9',
                                  padding: '5px',
                                }}
                              >
                                {details.value}
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                );
              })}
              {provided.placeholder}
            </tbody>
          </table>
        )}
      </Droppable>



    </DragDropContext>
  );
};

const truncateString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  }
  return str;
};

export default Dragging;
