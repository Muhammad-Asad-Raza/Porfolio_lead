import { createContext, useContext, useState } from 'react';

const NavCtx = createContext(null);

export function NavigationProvider({ children }) {
  // type: 'home' | 'section' | 'case-study' | 'project'
  // id:   section-id string, or numeric id for case-study/project
  const [page, setPage] = useState({ type: 'home', id: null });

  const navigate = (type, id = null) => {
    setPage({ type, id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome    = ()          => navigate('home');
  const goSection = (sectionId) => navigate('section', sectionId);

  return (
    <NavCtx.Provider value={{ page, navigate, goHome, goSection }}>
      {children}
    </NavCtx.Provider>
  );
}

export const useNav = () => useContext(NavCtx);
