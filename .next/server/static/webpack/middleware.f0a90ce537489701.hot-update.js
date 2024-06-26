"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./auth.config.ts":
/*!************************!*\
  !*** ./auth.config.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authConfig: () => (/* binding */ authConfig)\n/* harmony export */ });\nconst authConfig = {\n    pages: {\n        signIn: '/login'\n    },\n    callbacks: {\n        authorized ({ auth, request: { nextUrl } }) {\n            const isLoggedIn = !!auth?.user;\n            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');\n            if (isOnDashboard) {\n                if (isLoggedIn) return true;\n                return false; // Redirect unauthenticated users to login page\n            } else if (isLoggedIn) {\n                return Response.redirect(new URL('/dashboard', nextUrl));\n            }\n            return true;\n        }\n    },\n    providers: []\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vYXV0aC5jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLE1BQU1BLGFBQWE7SUFDeEJDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0lBQ0FDLFdBQVc7UUFDVEMsWUFBVyxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsT0FBTyxFQUFFLEVBQUU7WUFDdkMsTUFBTUMsYUFBYSxDQUFDLENBQUNILE1BQU1JO1lBQzNCLE1BQU1DLGdCQUFnQkgsUUFBUUksUUFBUSxDQUFDQyxVQUFVLENBQUM7WUFDbEQsSUFBSUYsZUFBZTtnQkFDakIsSUFBSUYsWUFBWSxPQUFPO2dCQUN2QixPQUFPLE9BQU8sK0NBQStDO1lBQy9ELE9BQU8sSUFBSUEsWUFBWTtnQkFDckIsT0FBT0ssU0FBU0MsUUFBUSxDQUFDLElBQUlDLElBQUksY0FBY1I7WUFDakQ7WUFDQSxPQUFPO1FBQ1Q7SUFDRjtJQUNBUyxXQUFXLEVBQUU7QUFDZixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2F1dGguY29uZmlnLnRzPzQzMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXV0aENvbmZpZyB9IGZyb20gJ25leHQtYXV0aCc7XG4gXG5leHBvcnQgY29uc3QgYXV0aENvbmZpZyA9IHtcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvbG9naW4nLFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhdXRob3JpemVkKHsgYXV0aCwgcmVxdWVzdDogeyBuZXh0VXJsIH0gfSkge1xuICAgICAgY29uc3QgaXNMb2dnZWRJbiA9ICEhYXV0aD8udXNlcjtcbiAgICAgIGNvbnN0IGlzT25EYXNoYm9hcmQgPSBuZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9kYXNoYm9hcmQnKTtcbiAgICAgIGlmIChpc09uRGFzaGJvYXJkKSB7XG4gICAgICAgIGlmIChpc0xvZ2dlZEluKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBSZWRpcmVjdCB1bmF1dGhlbnRpY2F0ZWQgdXNlcnMgdG8gbG9naW4gcGFnZVxuICAgICAgfSBlbHNlIGlmIChpc0xvZ2dlZEluKSB7XG4gICAgICAgIHJldHVybiBSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvZGFzaGJvYXJkJywgbmV4dFVybCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXSwgLy8gQWRkIHByb3ZpZGVycyB3aXRoIGFuIGVtcHR5IGFycmF5IGZvciBub3dcbn0gIl0sIm5hbWVzIjpbImF1dGhDb25maWciLCJwYWdlcyIsInNpZ25JbiIsImNhbGxiYWNrcyIsImF1dGhvcml6ZWQiLCJhdXRoIiwicmVxdWVzdCIsIm5leHRVcmwiLCJpc0xvZ2dlZEluIiwidXNlciIsImlzT25EYXNoYm9hcmQiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJSZXNwb25zZSIsInJlZGlyZWN0IiwiVVJMIiwicHJvdmlkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./auth.config.ts\n");

/***/ })

});