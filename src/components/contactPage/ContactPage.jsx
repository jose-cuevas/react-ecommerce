import { useForm } from "react-hook-form";

function ContactPage() {  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);    
    e.target.reset();
  };

  return (
    <>
      <h1 className="text-center">Contact us!</h1>
      <p className=" text-center lead mb-5">
        {" "}
        Thank you!, we will answer as soon as possible
      </p>
      <section className="container w-50">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            className="form-control mb-3"
            {...register("firstName", {
              required: true,
              maxLength: 10,
              pattern: /^[a-z ,.'-]+$/i,
            })}
            id="firstName"
          />
          {errors.firstName && <p className="text-danger text-small">First name is required!</p>}

          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            className="form-control mb-3"
            {...register("lastName", {
              required: true,
              maxLength: 10,
              pattern: /^[a-z ,.'-]+$/i,
            })}
          />
          {errors.lastName && <p className="text-danger text-small">Last name is required!</p>}

          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            className="form-control mb-3"
            type="number"
            {...register("age", { required: true, min: 18 })}
            id="age"
          />
          {errors.age && <p className="text-danger text-small">Please insert a correct number!</p>}

          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            className="form-control mb-3"
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-danger text-small">Please insert an email!</p>}

          <label htmlFor="userQuestion" className="form-label">Please, write your question: </label>
          <textarea id="userQuestion" cols="30" rows="7" className="form-control mb-3" {...register("userQuestion")}></textarea>

          <input type="submit" className="btn btn-primary"/>
        </form>
      </section>
    </>
  );
}

export default ContactPage;
