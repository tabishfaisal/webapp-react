import { useState } from "react";
import axios from "axios";
const intialFormData = {
    name:'',
    vote: 1,
    text: ""
}

function ReviewForm({id, onAdding=()=>{}}) {
    const [formData,setformData] = useState(intialFormData)

    function onFormChange(e){
        const {value, name} = e.target;
        
        setformData({
            ...formData,
            [name]: value
        })
    }
    function storeReview(e){
        e.preventDefault();
        axios.post(`http://localhost:3000/api/movies/${id}/reviews`,formData)
        .then(res =>{
            console.log(res);
            setformData(intialFormData);
            onAdding();
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <>
        <h1>Add Review</h1>
        <form onSubmit={storeReview} action="" className="p-3 border rounded bg-light">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" value={formData.name} onChange={onFormChange} name="name" id="name" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label">Comment</label>
                <textarea value={formData.text} onChange={onFormChange} name="text" id="text" className="form-control" rows="4" placeholder="Write your comment here"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="vote" className="form-label">Vote</label>
                <select value={formData.vote} onChange={onFormChange} name="vote" id="vote" className="form-select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button type="submit">submit</button>
            </div>
        </form>
        </>
        
    )
}
export default ReviewForm;