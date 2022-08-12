import Swal from "sweetalert2";

export const alerts = {
    notification: (status, message, timer = 2000) => {
        Swal.mixin({
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
            icon: ( (status) ? 'success': 'error' ),
            title: message
        })
    }

}