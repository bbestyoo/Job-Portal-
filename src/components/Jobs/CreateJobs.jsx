import React, { useState } from 'react';
import Footer from "../Footer"
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function CreateJob() {

  const navigate = useNavigate()
  const userDetail = useSelector((state) => state.user.value);
  // console.log(userDetail)
  const [formData, setFormData] = useState({
    title: '',
    companyName: '',
    tags:[],
    job_type: '',
    job_level: '',
    type:'',
    category: '',
    experience: '',
    deadline_date: '',
    description: '',
    // image: userDetail.image,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    const updatedJob = { ...formData };
    e.preventDefault();
    // You can perform actions with the form data here
    // console.log('Form Data:', formData);
    // const { deadline_date } = formData;
    // deadline_date.toString();
    // deadline_date.split(0, 10);
    // console.log(deadline_date);
    // const updatedJob = { ...jobData, deadline_date };
    axios
      .post("https://job-portal-server-tvif.onrender.com/api/createJob", updatedJob, { 
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`, 
        },
      })
      .then((res) => {
        console
        toast.success("Job Created Successfully");

        // setFormData(initialState);
        navigate("/");
      })
      .catch((err) => {
        // console.log(err);
        // if (err.response) {
        //   const errorArray = err.response.data;
        //   let temp = {};
        //   errorArray.forEach((err) => {
        //     temp[err.path] = `*${err.path} is required`;
        //   });

        //   setErrorData(temp);
        }
      );
  }
  return (
    <>
      <div className="w-1/2 mx-auto mt-16 p-7 px-10 rounded shadow mb-40 bg-footer">
        <h2 className="text-3xl font-semibold mb-10">Create A Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-600">
              Job Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-600">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="tags" className="block text-sm font-medium text-gray-600">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="job_type" className="block text-sm font-medium text-gray-600">
              Job Type
            </label>
            <select
              id="job_type"
              name="job_type"
              value={formData.job_type}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            >
              <option value="" disabled>
                Select Job Type
              </option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="job_level" className="block text-sm font-medium text-gray-600">
              Job Level
            </label>
            <select
              id="job_level"
              name="job_level"
              value={formData.job_type}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            >
              <option value="" disabled>
                Select Job Level
              </option>
              <option value="Fresher">Fresher</option>
              <option value="Junior">Junior</option>
              <option value="Mid">Mid</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium text-gray-600">
              Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="Hot">Hot</option>
              <option value="Featured">Featured</option>
              <option value="Normal">Normal</option>
              <option value="Top">Top</option>
            </select>
          </div>
          <div>
          <label htmlFor="JobCategory" className="block text-sm font-medium text-gray-600">
              Job Category
            </label>
          <select
                  onChange={(e) => handleChange(e)}
                  type="category"
                  name="category"
                  className="block mb-5 py-2 px-0 w-full text-md text-black bg-transparent border-0 border-b-2  cursor-pointer dark:text-gray-700 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                  placeholder="Select a category"
                >
                  <option value={"bank-finance"}>Bank/Finance</option>
                  <option value={"ngo-ingo"}>NGO/INGO</option>
                  <option value={"sales-marketing"}>Sales/Marketing</option>
                  <option value={"government"}>Government</option>
                  <option value={"army-police"}>Army/Police</option>
                  <option value={"cooperative"}>Co-operative</option>
                  <option value={"school-college"}>School/College</option>
                  <option value={"healthcare"}>Healthcare</option>
                  <option value={"hotel-restaurant"}>Hotel/Restaurant</option>
                  <option value={"quality-assurance"}>Quality Assurance</option>
                  <option defaultChecked value={"it-computer"}>
                    IT/Computer
                  </option>
                  <option value={"human-resource"}>
                    Human Resource
                  </option>
                  <option value={"design-creative"}>
                    Design-Creative
                  </option>
                </select>
          </div>
          <div className="mb-4">
            <label htmlFor="experience" className="block text-sm font-medium text-gray-600">
              Experience
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="deadline_date" className="block text-sm font-medium text-gray-600">
              Deadline
            </label>
            <input
              type="date"
              id="deadline_date"
              name="deadline_date"
              value={formData.deadline_date}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Details
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Create Job
          </button>
        </form>
      </div>
    </>
  );
}
