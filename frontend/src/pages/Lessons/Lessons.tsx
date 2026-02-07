import React from 'react';
import { useParams } from 'react-router-dom';

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  type: 'video' | 'article' | 'quiz';
}

const Lessons: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  
  // Mock data - in a real app, this would come from an API
  const courseTitle = courseId === '1' ? 'React Fundamentals' : 
                     courseId === '2' ? 'Advanced TypeScript' : 'Course';
  
  const lessons: Lesson[] = [
    {
      id: '1',
      title: 'Introduction to React',
      description: 'Learn what React is and why it\'s popular',
      duration: '15 min',
      completed: true,
      type: 'video',
    },
    {
      id: '2',
      title: 'JSX Fundamentals',
      description: 'Understanding JSX syntax and expressions',
      duration: '20 min',
      completed: true,
      type: 'article',
    },
    {
      id: '3',
      title: 'Components and Props',
      description: 'Creating reusable components with props',
      duration: '25 min',
      completed: true,
      type: 'video',
    },
    {
      id: '4',
      title: 'State and Lifecycle',
      description: 'Managing component state and lifecycle methods',
      duration: '30 min',
      completed: false,
      type: 'video',
    },
    {
      id: '5',
      title: 'Quiz: React Basics',
      description: 'Test your knowledge of React fundamentals',
      duration: '10 min',
      completed: false,
      type: 'quiz',
    },
  ];

  const completedLessons = lessons.filter(lesson => lesson.completed).length;
  const totalLessons = lessons.length;
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="lessons">
      <div className="lessons-header">
        <h1>{courseTitle} - Lessons</h1>
        <div className="course-progress-summary">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className="progress-text">
            {completedLessons} of {totalLessons} lessons completed ({progressPercentage}%)
          </span>
        </div>
      </div>
      
      <div className="lessons-list">
        {lessons.map((lesson, index) => (
          <div key={lesson.id} className="card lesson-card">
            <div className="lesson-number">{index + 1}</div>
            
            <div className="lesson-content">
              <div className="lesson-header">
                <h3>{lesson.title}</h3>
                <div className="lesson-meta">
                  <span className={`lesson-type ${lesson.type}`}>
                    {lesson.type}
                  </span>
                  <span className="lesson-duration">{lesson.duration}</span>
                  {lesson.completed && (
                    <span className="lesson-completed">✓ Completed</span>
                  )}
                </div>
              </div>
              
              <p className="lesson-description">{lesson.description}</p>
              
              <div className="lesson-actions">
                {lesson.completed ? (
                  <button className="btn btn-secondary">Review</button>
                ) : (
                  <button className="btn">Start Lesson</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lessons;