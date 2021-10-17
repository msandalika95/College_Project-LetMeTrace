import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function AllStudents(){
    const [students, setStudents] = useState([]);

    useEffect(() => {
        function getStudents(){
            axios.get("http://localhost:8070/visitor/").then((res) => {
                setStudents(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getStudents();
    }, [])
}