export default {
  apps: [{
    name: 'portfolio',
    script: './start-server.sh',
    watch: true,
    autorestart: true,
    exp_backoff_restart_delay: 100,
    max_restarts: 10,
    kill_timeout: 3000,
    env: {
      NODE_ENV: 'development',
      HOST: '0.0.0.0',
      PORT: 5173,
      VITE_PORT: 5173
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 5173,
      VITE_PORT: 5173
    }
  }]
} 