import React, { useState, useEffect } from "react";

const CRUD = () => {
    const [formData, setFormData] = useState({
        userId: "",
        id: "",
        title: "",
        body: "",
    });

    const [data, setData] = useState([]);

    const { userId, id, title, body } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userId && id && title && body) {
            setData([...data, formData]);
            setFormData({ userId: "", id: "", title: "", body: "" });
        }
    };

    const handleDelete = (index) => {
        const newData = data.filter((item, i) => i !== index);
        setData(newData);
    };

    const handleEdit = (index) => {
        const itemToEdit = data[index];
        setFormData(itemToEdit);
        handleDelete(index);
    };

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 mt-2">
                    <h4> Lets Learn CRUD API Integration in React js using axios</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="userId">User Id</label>
                            <input
                                type="text"
                                className="form-control"
                                id="userId"
                                placeholder="Enter user id"
                                name="userId"
                                value={userId}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="id">Id</label>
                            <input
                                type="text"
                                className="form-control"
                                id="id"
                                placeholder="Enter id"
                                name="id"
                                value={id}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                placeholder="Enter title"
                                name="title"
                                value={title}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="body">Body</label>
                            <textarea
                                className="form-control"
                                id="body"
                                rows="3"
                                placeholder="Enter body"
                                name="body"
                                value={body}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>

                    <hr />

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>User Id</th>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Body</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.userId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                    <td>
                                        <button className="btn btn-warning" onClick={() => handleEdit(index)}>
                                            Edit
                                        </button>{" "}
                                        <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default CRUD;
