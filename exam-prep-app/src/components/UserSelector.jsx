import { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import './UserSelector.css';

function UserSelector({ onUserSelect }) {
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Check if user is already selected
    const savedUser = localStorage.getItem('examPrepUser');
    if (savedUser && (savedUser === 'john' || savedUser === 'andreas')) {
      setSelectedUser(savedUser);
      onUserSelect(savedUser);
    }
  }, [onUserSelect]);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    localStorage.setItem('examPrepUser', user);
    onUserSelect(user);
  };

  // Always show selector overlay, but hide if user is selected
  if (selectedUser) {
    return null;
  }

  return (
    <div className="user-selector-overlay">
      <div className="user-selector">
        <div className="selector-header">
          <User size={32} />
          <h2>Select Your Profile</h2>
          <p>Choose your profile to track your learning progress</p>
        </div>
        
        <div className="user-options">
          <button 
            className="user-option"
            onClick={() => handleUserSelect('john')}
          >
            <div className="user-avatar">👤</div>
            <div className="user-name">John</div>
          </button>
          
          <button 
            className="user-option"
            onClick={() => handleUserSelect('andreas')}
          >
            <div className="user-avatar">👤</div>
            <div className="user-name">Andreas</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserSelector;

