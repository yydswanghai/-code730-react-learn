import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: '/clock', component: '@/pages/clock' },
    { path: '/users/:id', component: '@/pages/users/index' },
    { path: '/users/:id/detial', component: '@/pages/users/detail' },
    { path: '/files/*', component: '@/pages/files/' }
  ],
  npmClient: 'yarn',
});