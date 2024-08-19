import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function TopicList() {
  useEffect(()=>{
    fetch ('/topic/topisc.json')
    .then((response)=>response.json())
    .then((data)=>setTopics(data))
    .catch((error)=>console.error('Error fetching topics:', error));
  },[]);
  return (
    <div className="topic-list">
      <h1>Topics List</h1>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default TopicList;
