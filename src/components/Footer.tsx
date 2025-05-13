import { GitHub, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-secondary-900 py-8">
      <div className="container-padding mx-auto">
        <div className="text-center text-secondary-600 dark:text-secondary-400">
          <p>© {new Date().getFullYear()} Libin Mathew. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 