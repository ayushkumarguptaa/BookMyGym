import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
// import exercises from '../src/data/exercise'
import axios from 'axios'
import Equip from './top_equipments'


function TopExercises() {
    const [exercises, setExercises] = useState([]);

//   const exerciseHandler = async (e) => {
//     e.preventDefault(); // stop link navigation
//     try {
//       const res = await axios.get("http://localhost:8080/gymnastic/");
//       setExercises(res.data); // adjust if data is nested (e.g., res.data.topexercises)
//     } catch (error) {
//       console.error("Error fetching exercises:", error);
//     }
//   };
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const res = await axios.get("http://localhost:8080/gymnastic/");
        setExercises(res.data.topexercises);
        // console.log(res.data.topexercises)
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchExercises();
  }, []);


  return (
    <>
    <section className="py-10">
      <h2 className="text-center text-2xl font-bold mb-8">TOP EXERCISES</h2>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {
          exercises.map((exercise, idx) => (
          <div
            key={idx}
            className="w-60 bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={exercise.image}
              alt={exercise.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-3 text-center font-medium">{exercise.title}</div>
          </div>
          ))
        }
      </div>

      <div className="text-center mt-6">
        <Link
          to='/gymnastic/top-exercises'
          className="text-blue-500 hover:underline flex items-center justify-center gap-1"
        >
          View More <span>↓</span>
        </Link>
      </div>
    </section>

    {/* <Equip equipments = {res.data.equipments} /> */}

        </>

  );
}

export default TopExercises;
