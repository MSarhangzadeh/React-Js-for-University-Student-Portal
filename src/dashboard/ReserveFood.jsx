import React, { useState, useEffect } from 'react';

// Dummy data for restaurants and foods
const restaurants = [
  {
    id: 1,
    name: 'Italian Bistro',
    foods: [
      { id: 1, name: 'Pizza', image: 'src/assets/images/food/01.jfif', price: 12 },
      { id: 2, name: 'Pasta', image: 'src/assets/images/food/01.jfif', price: 10 },
      { id: 3, name: 'Salad', image: 'src/assets/images/food/01.jfif', price: 8 },
      { id: 4, name: 'Tiramisu', image: 'src/assets/images/food/01.jfif', price: 6 },
    ],
  },
  {
    id: 2,
    name: 'Sushi Place',
    foods: [
      { id: 5, name: 'California Roll', image: 'src/assets/images/food/01.jfif', price: 14 },
      { id: 6, name: 'Nigiri', image: 'src/assets/images/food/01.jfif', price: 16 },
      { id: 7, name: 'Miso Soup', image: 'src/assets/images/food/01.jfif', price: 5 },
      { id: 8, name: 'Green Tea Ice Cream', image: 'src/assets/images/food/01.jfif', price: 7 },
    ],
  },
];

// Generate next 7 days from today
const getNext7Days = () => {
  const days = [];
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    days.push(date.toLocaleDateString(undefined, options));
  }
  return days;
};

  const ReserveFood = () => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(restaurants[0].id);
  const [selectedFoodsByDay, setSelectedFoodsByDay] = useState({}); // { day: foodId }
  const [walletMoney, setWalletMoney] = useState(100); // Dummy wallet money

  const days = getNext7Days();

  const handleRestaurantChange = (e) => {
    const newRestId = Number(e.target.value);
    setSelectedRestaurantId(newRestId);
    setSelectedFoodsByDay({}); // Reset food selections on restaurant change
  };

  const handleFoodSelect = (day, foodId) => {
    setSelectedFoodsByDay(prev => {
      if (prev[day] === foodId) {
        // If same food clicked again, unselect it
        const newSelection = { ...prev };
        delete newSelection[day];
        return newSelection;
      }
      // Otherwise, select the new food
      return { ...prev, [day]: foodId };
    });
  };
  // Find selected restaurant object
  const restaurant = restaurants.find(r => r.id === selectedRestaurantId);

  return (
    <div>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <div>
          <label htmlFor="restaurant-select" className="form-label me-2">
            Select Restaurant:
          </label>
          <select
            id="restaurant-select"
            className="form-select d-inline-block w-auto"
            value={selectedRestaurantId}
            onChange={handleRestaurantChange}
          >
            {restaurants.map(r => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <strong>Wallet: </strong> ${walletMoney.toFixed(2)}
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table className="table table-striped table-bordered align-middle text-center" style={{ minWidth: 700 }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Restaurant</th>
              <th>Available Foods</th>
              <th>Selected Food</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {days.map(day => {
              const selectedFoodId = selectedFoodsByDay[day];
              const selectedFood = restaurant.foods.find(f => f.id === selectedFoodId);

              return (
                <tr key={day}>
                  <td data-label="Date">{day}</td>
                  <td data-label="Restaurant">{restaurant.name}</td>
                  <td data-label="Available Foods" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    {restaurant.foods.map(food => (
                      <div
                        key={food.id}
                        style={{
                          border: selectedFoodId === food.id ? '3px solid #0d6efd' : '1px solid #ccc',
                          borderRadius: 8,
                          padding: 5,
                          cursor: 'pointer',
                          width: 70,
                          textAlign: 'center',
                          userSelect: 'none',
                        }}
                        onClick={() => handleFoodSelect(day, food.id)}
                      >
                        <img
                          src={food.image}
                          alt={food.name}
                          style={{ width: '60px', height: '60px', borderRadius: 6 }}
                        />
                        <div style={{ fontSize: 12 }}>{food.name}</div>
                      </div>
                    ))}
                  </td>
                  <td data-label="Selected Food">
                    {selectedFood ? (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img
                          src={selectedFood.image}
                          alt={selectedFood.name}
                          style={{ width: 60, height: 60, borderRadius: 6, marginBottom: 4 }}
                        />
                        <span>{selectedFood.name}</span>
                      </div>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td data-label="Price">{selectedFood ? `$${selectedFood.price.toFixed(2)}` : '-'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-3 d-flex justify-content-end">
        <button className="btn btn-primary" disabled>
          Order (Coming Soon)
        </button>
      </div>
    </div>
  );
};

export default ReserveFood;
