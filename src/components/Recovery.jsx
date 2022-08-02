import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../asset/style/Recover_pass.css";
import Swal from 'sweetalert2'
import axios from "axios";


function Recovery() {
  const data = useState({
    email: '',
})

  const url = 'http://3.16.1.148/api/email/send'

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = values => {
    const data = values;
    axios.post(url,{
      email: data.email
    })
    .then(response => {
      console.log(response.data);
    })
    console.log(data.email);
    let timerInterval
    Swal.fire({
      title: 'Enviando Email...',
      timer: 2500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire(
          'Enviado',
          '',
          'success'
        )
      }
    })
  }

  return (
    <section class="h-100 gradient-form bg-warning">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-8">
                    <div className="card rounded-3 text-black">
                        <div className="row g-0">
                            <div className="col-lg-6">
                                <div className="card-body p-md-5 mx-md-8">
                                    <div className="text-center">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                            width="190px;" alt="logo"></img>
                                        <h4 className="mt-1 mb-5 pb-1">Recovery Password</h4>
                                    </div>

                                    <form noValidate onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form2Example11" >Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="Email" required {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: "Obligatory field",
                                                },
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalido email"
                                                }
                                            })}></input>
                                            {errors.email && <span className="text-danger">{errors.email.message}</span>}
                                        </div>
                                        
                                        <div className="text-center pt-1 mb-5 pb-1">
                                            <button type="submit" className="btn btn-danger btn-block fa-lg gradient-custom-2 mb-3">Restore</button>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-center pb-4">
                                            <span className="fw-bold text-light"><a className="btn btn-outline-danger"href="/">Login</a></span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card bg-danger p-md-4 col-lg-6 d-flex align-items-center gradient-custom-2">
                                <div className="text-white px-5 py-4 p-md-5 mx-md-1">
                                    <br/><br/><br/><br/>
                                    <br/><br/><br/>
                                    <h1 className="text-center mb-4">Recovery Password</h1>
                                    <p className="text-center mb-5 pb-1 "></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Recovery;