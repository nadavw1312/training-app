import React from 'react';
import { Link } from 'react-router-dom';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  progress: number;
  enrolled: boolean;
}

const Courses: React.FC = () => {
  const courses: Course[] = [
    {
      id: '1',
      title: 'React Fundamentals',
      description: 'Learn the basics of React including components, props, and state',
      instructor: 'Jane Smith',
      duration: '8 hours',
      progress: 75,
      enrolled: true,
    },
    {
      id: '2',
      title: 'Advanced TypeScript',
      description: 'Master advanced TypeScript patterns and best practices',
      instructor: 'John Doe',
      duration: '12 hours',
      progress: 30,
      enrolled: true,
    },
    {
      id: '3',
      title: 'Node.js Backend Development',
      description: 'Build scalable backend services with Node.js and Express',
      instructor: 'Alex Johnson',
      duration: '15 hours',
      progress: 0,
      enrolled: false,
    },
    {
      id: '4',
      title: 'UI/UX Design Principles',
      description: 'Learn the fundamentals of user interface and experience design',
      instructor: 'Sarah Williams',
      duration: '10 hours',
      progress: 0,
      enrolled: false,
    },
  ];

  return (
    <div className="courses">
      <div className="courses-header">
        <h1>Available Courses</h1>
        <p>Browse and enroll in courses to enhance your skills</p>
      </div>
      
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="card course-card">
            <div className="course-header">
              <h2>{course.title}</h2>
              <span className="course-duration">{course.duration}</span>
            </div>
            
            <p className="course-description">{course.description}</p>
            
            <div className="course-meta">
              <span className="course-instructor">Instructor: {course.instructor}</span>
              {course.enrolled && (
                <div className="course-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <span className="progress-text">{course.progress}% complete</span>
                </div>
              )}
            </div>
            
            <div className="course-actions">
              {course.enrolled ? (
                <Link to={`/courses/${course.id}/lessons`} className="btn">
                  {course.progress === 0 ? 'Start Course' : 'Continue'}
                </Link>
              ) : (
                <button className="btn">Enroll Now</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;