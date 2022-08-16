import Swal from "sweetalert2";

export const alerts = {

    notification: (ico, title, message = '', timer = 2000) => {
        return Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: timer,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        }).fire({
            icon: ( (ico) ? ico: 'success' ),
            title: title,
            text: message,
        })
    }



}