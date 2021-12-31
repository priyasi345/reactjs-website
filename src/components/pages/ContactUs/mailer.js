import emailjs from 'emailjs-com';
import LoginIcon from '../../Assets/icon-img.png';
const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'honey', e.target, 'user_lRIWRJLlqRRlbcHK36rbu')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return (
        <div className="container border" 
        style={{marginTop:"-50px",
        width: '100%',
        }}>
            <h1 style={{marginTop:'55px'}} > </h1>
            {/* <img className="img-fluid " src={LoginIcon} alt="icon" /> */}
            <div className="row">
                <div className="col-md-7 col-sm-12">
                <form className='row' style={{margin: "105px 105px 109px 200px"}} onSubmit={sendEmail}>
                <label>Name</label>
                 <input type="text" name="name" className="form-control" />
                 <label> Email</label>
                 <input type="email" name="user_email" className="form-control"/>
                 <label>Message</label>
                 <textarea name='message' row='4' className='form-control'/>
                 <input type="submit" value='Send' className='form-control btn btn-primary' style={{marginTop:"10px"}}/>
               </form>
             </div>
             <div className="col-md-5 col-sm-12">
                <img className="img-fluid w-50  p-3" src={LoginIcon} alt="icon"/>
             </div>
            </div>
        </div>
    );
};
export default Mailer;