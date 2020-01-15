import server from './server';
const port = process.env.PORT || 9090;

server.listen({ port }, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
