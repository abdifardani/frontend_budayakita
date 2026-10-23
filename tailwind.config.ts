import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { espresso:'#21150F', gold:'#D9A34F', ivory:'#F5E7CA', wood:'#70482B' }, fontFamily: { serif:['Georgia','serif'] } } }, plugins: [] } satisfies Config;
