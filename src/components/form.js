import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import '../components/form.css'


function Form(props) {
  const[state,setState] = useState({
    type : '',
    image: null,
    name: '',
    description:'',
    price:'',
    brand:''
  })
  // const [type, setType] = useState('');
  // const [image, setImage] = useState(null);
  // const [name, setName] = useState('');
  // const [description, setDescription] = useState('');
  // const [price, setPrice] = useState('');
  // const [brand, setBrand] = useState('');

  const handleStateChange = (event)=>{
    const {name,value} = event.target;
    
    setState({
      ...state,
      [name]: value
    })

  }

  const handleImageUpload = (event)=>{

    const {name,files} = event.target
    setState({
      ...state,
      image: files[0]
    })

  }

 

    const handleSubmit = (event) => {

    event.preventDefault();

    const formData = new FormData();
    formData.append('type', state.type);
    formData.append('image', state.image);
    formData.append('name', state.name);
    formData.append('description', state.description);
    formData.append('price', state.price);
    formData.append('brand', state.brand);

    axios.post("http://localhost:5000/postData", formData)
      .then((res) => {
        console.log(res)
        props.handlechange()
      })
      .catch(err => console.log(err));
    
    
    
  };

  const handleCancel = () => {
    setState({
      type : '',
      image: null,
      name: '',
      description:'',
      price:'',
      brand:''
    })
  };
   return (
    <form onSubmit={handleSubmit}>
      <label>
        Type:
        <select value={state.type} name="type" onChange={handleStateChange}>
          <option value="">Select type</option>
          <option value="inventory">Inventory</option>
          <option value="non-inventory">Non-inventory</option>
        </select>
      </label>
      <br />
      <label>
        Image:
        <input type="file" name="image" onChange={handleImageUpload} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" name='name' value={state.name} onChange={handleStateChange} required />
      </label>
      <br />
      <label>
        Description:
        <textarea value={state.description} name= "description" onChange={handleStateChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" value={state.price} name= "price" onChange={handleStateChange} required />
      </label>
      <br />
      <label>
        Brand:
        <input type="text" value={state.brand} name= "brand" onChange={handleStateChange} />
      </label>
      <br />
      <div class="buttons-container">
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default Form