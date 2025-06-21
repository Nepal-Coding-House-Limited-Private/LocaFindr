import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      Search
    </div>
  );
}

export default Search;
