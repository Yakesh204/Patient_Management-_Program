class Patient{
    constructor(fullName){
        this.fullName = fullName;
    }
}

class Appointment{
    constructor(patient){
        let _patient_ = patient;
        
        this.getPatient = function(){
            return _patient_;        }

        this.setPatient = function(patient){
            _patient_ = patient;    
        }
        }
        scheduleAppointment(date){
            console.log("An appointment has been scheduled for " + this.getPatient().fullName+ " on " + date);
            }
    }


class Visit extends Appointment{
    constructor(c, patient){
        super(patient);
        let _complaint_ = c;
        this.getComplaint = function(){
            return _complaint_;
        }
        this.setComplaint = function(c){
            _complaint_ =c;
        }
    }

         scheduleAppointment(date) {
         super.scheduleAppointment(date);
         console.log(this.getPatient().fullName + "'s appointment's main complaint has been recorded as: " + this.getComplaint());
     }

}

class Procedure extends Appointment{
constructor(instructions, patient){
    super(patient);
    this.instructions = instructions;
    }
        scheduleAppointment(date){
        super.scheduleAppointment(date);
        console.log("The following pre-procedure instructions have been provided to " + this.getPatient().fullName + ": " + this.instructions);
        }
}

let patient1 = new Patient("John Smith");
let patient2 = new Patient("Alice Wonder");
let ap1 = new Procedure("Drink 3 glasses of water at least 1 hour before the procedure", patient1);
ap1.scheduleAppointment("Jan. 10th");
let ap2 = new Visit("Persistant headaches", patient1);
ap2.scheduleAppointment("Feb. 1st");
let ap3 = new Procedure("Fast 12h prior to your appointment", patient2);
ap3.scheduleAppointment("Mar. 10th");
let ap4 = new Visit("Yearly physical", patient2);
ap4.scheduleAppointment("Apr. 1st");




//Do not touch
module.exports.Appointment=Appointment;
module.exports.Visit=Visit;
module.exports.Procedure=Procedure;
module.exports.Patient=Patient;
