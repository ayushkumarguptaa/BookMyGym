import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const PopularEquipments = () => {
    const [equipments, setEquipments] = useState([])

    useEffect(() => {
        const fetchExercises = async () => {
          try {
            const res = await axios.get("http://localhost:8080/gymnastic/");
            setEquipments(res.data.gyminfo);
            // console.log(res.data.equipments)
          } catch (error) {
            console.error("Error fetching exercises:", error);
          }
        };
    
        fetchExercises();
      }, []);



 return (
    <section className="py-10">
      <h2 className="text-center text-2xl font-bold mb-8">POPULAR GYM</h2>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {
          equipments.map((exercise, idx) => (
          <div
            key={idx}
            className="w-60 bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={exercise.image}
              alt={exercise.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3 text-center font-medium">{exercise.name}</div>
          </div>
          ))
        }
      </div>

      <div className="text-center mt-6">
        <Link
          
          to='/gymnastic/allgyms'
          className="text-blue-500 hover:underline flex items-center justify-center gap-1"
        >
          View More <span>↓</span>
        </Link>
      </div>
    </section>
  );
};

export default PopularEquipments;
