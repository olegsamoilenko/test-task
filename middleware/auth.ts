import { useAuthStore } from '~/stores/auth'
import Cookies from 'js-cookie'
export default defineNuxtRouteMiddleware((to, from) => {
    const {isAuthenticated} = useAuthStore()
    if (!isAuthenticated) {
        Cookies.set('loginMessage', 'Сторінка доступна тільки для авторизованих користувачів')
        return navigateTo('/login')
    }
})