import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";

const AllClasses = () => {
  const axiosSecure = useAxiosSecure();

  // Fetching approved classes
  const { data: classes = [], isLoading, isError } = useQuery({
    queryKey: ["approvedClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get("/courses");
      return res.data.filter((course) => course.status === "approved");
    },
  });

  // Show loading state
  if (isLoading) {
    return <p>Loading classes...</p>;
  }

  // Show error state
  if (isError) {
    return <p>Failed to load classes.</p>;
  }

  // const [sortType, setSortType] = useState(null);
  // const sortedClasses = [...classes];

  // // Sorting Logic
  // if (sortType === "price") {
  //   sortedClasses.sort((a, b) => a.price - b.price);
  // } else if (sortType === "enrollment") {
  //   sortedClasses.sort((a, b) => b.totalEnrollment - a.totalEnrollment);
  // }

  return (
    <div>
      <div className="text-center p-10 bg-[#F5E9D4]">
        <h3 className="font-extrabold text-4xl">Our Courses</h3>
        <p className="mt-3">Explore, Learn, and Master New Skills – Your Journey Starts Here!</p>
      </div>
      <div className="flex justify-center gap-4 my-6">
        <button
          className="btn btn-outline btn-primary"
          onClick={() => setSortType("price")}
        >
          Sort by Price
        </button>
        <button
          className="btn btn-outline btn-secondary"
          onClick={() => setSortType("enrollment")}
        >
          Sort by Enrollment
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-16 bg-[#FDF6EA] ">
        {classes.map((singleClass) => (
          <div key={singleClass._id} className="card bg-[#FDF6EA] border border-gray-950 transition-transform duration-300 hover:scale-105  shadow-lg p-4">
            <img
              src={singleClass.image}
              alt={singleClass.title}
              className="rounded-lg mb-4"
            />
            <h2 className="text-lg font-bold">{singleClass.title}</h2>
            <p className="text-sm">Instructor: {singleClass.instructorName}</p>
            <p className="text-sm">Price: ${singleClass.price}</p>
            <p className="text-sm">Enrolled: {singleClass.totalEnrollment}</p>
            <p className="text-sm mb-4">{singleClass.description}</p>
            {/* Link to class details page */}
            <Link to={`/class/${singleClass._id}`}>
              <button className="btn bg-[#D08345] text-white rounded-3xl">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
