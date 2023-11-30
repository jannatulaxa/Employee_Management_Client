import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import useAuthProvider from '../Hooks/useAuthProvider/useAuthProvider';


const UserPage = () => {
    const {user:demo} = useAuthProvider()
  const user = {
    name: "John Doe",
    photoURL: "https://example.com/photo.jpg",
    designation: "Software Engineer",
    salary: {
      "2023-01": 5000,
      "2023-02": 5500,
      "2023-03": 6000,
      "2023-04": 5000,
      "2023-05": 5500,
      "2023-06": 6000,
      // Add more months and salary data as needed
    },
  };

  useEffect(() => {
    // Get the canvas element and its 2d context
    const ctx = document.getElementById('salaryChart');
    const existingChart = Chart.getChart(ctx);

    // Destroy the existing chart if it exists
    if (existingChart) {
      existingChart.destroy();
    }

    // Create a new bar chart
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(user.salary),
        datasets: [{
          label: 'Salary',
          data: Object.values(user.salary),
          backgroundColor: '#1976D2',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          maxBarThickness: 40,
          
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }, [user.salary]);

  return (
    <div>
      <div id="user-details" >
        <h1>{demo?.displayName}</h1>
        <img src={demo?.photoURL} alt="User Photo" style={{ maxWidth: '200px' }} />
        <p>{user.designation}</p>
      </div>
      <div id="chart-container" className='p-40'>
        <canvas id="salaryChart"></canvas>
      </div>
    </div>
  );
};

export default UserPage;
