import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const AppointmentForm = ({ modalIsOpen, setIsOpen, appointmentOn, date }) => {
      const {
          register,
          handleSubmit,
          formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
          console.log(data);
          closeModal();
        };
    const modalStyle = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };
    Modal.setAppElement("#root");

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyle}
                contentLabel="Example Modal"
            >
                <h2 className="brand-text text-center">{appointmentOn}</h2>
                <p className="text-secondary text-center">
                    <small>On{date.toDateString()}</small>
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="text-center p-5">
                    <div className="form-group m-3">
                        <input
                            className="form-control"
                            {...register("name")}
                            required
                            placeholder="Your name"
                        />
                    </div>
                    <div className="form-group m-3">
                        <select {...register("gender")} className="form-control">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group m-3 row">
                        <div className="col-md-4">
                            <input
                                className="form-control"
                                {...register("email")}
                                required
                                type="email"
                                placeholder="Your email"
                            />
                        </div>
                        <div className="col-md-4">
                            <input
                                className="form-control"
                                {...register("phone")}
                                required
                                placeholder="Your phone"
                            />
                        </div>
                        <div className="col-md-4">
                            <input
                                className="form-control"
                                {...register("weight")}
                                required
                                placeholder="Your weight"
                            />
                        </div>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-brand" />
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;
