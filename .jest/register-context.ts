//@ts-nocheck
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
// import '@babel/polyfill';
console.log("register-context", registerRequireContextHook);
registerRequireContextHook();
