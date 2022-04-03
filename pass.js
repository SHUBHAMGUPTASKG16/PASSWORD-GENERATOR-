var x=document.getElementById("passfield");
              document.getElementById("eye").addEventListener("click",function()
              {
                
                if(x.type=="password")
                {
                    x.type="text";
                    this.classList.add("fa-eye");
                    this.classList.remove("fa-eye-slash");

                }
                else
                {
                    x.type="password"; 
                    this.classList.remove("fa-eye");
                    this.classList.add("fa-eye-slash");
                }
              });
              x.addEventListener("keyup",function()
              {
                validate(x.value);
              });
              function validate(pswd)
              {
                if(pswd.length>=8)
                {
                   // document.getElementById("length").classList.add("valid");
                   // document.getElementById("length").classList.remove("invalid");
                    addclass("length","valid");
                    removeclass("length","invalid");

                   // document.getElementById("length").firstChild.classList.remove(" fa fa-times");
                   // document.getElementById("length").firstChild.classList.add("fa fa-check");

                   addclassicon("length","fa-check");
                   removeclassicon("length","fa-times");
                 
                }
                else{
                    //document.getElementById("length").classList.add("invalid");
                   // document.getElementById("length").classList.remove("valid");
                  addclass("length","invalid");
                    removeclass("length","valid");

                    //document.getElementById("length").firstChild.classList.add("fa-times");
                   // document.getElementById("length").firstChild.classList.remove("fa-check");
                
                   addclassicon("length","fa-times");
                    removeclassicon("length","fa-check");

                   //invalid("length");
                }
              
              function addclass(id,cl)
              {
                  document.getElementById(id).classList.add(cl);
              }
              function removeclass(id,cl)
              {
                  document.getElementById(id).classList.remove(cl)
              }

              function addclassicon(id,cl)
              {
                  document.getElementById(id).firstChild.classList.add(cl);
              }
              function removeclassicon(id,cl)
              {
                  document.getElementById(id).firstChild.classList.remove(cl)
              }

              if(pswd.match(/[A-z]/))
              {
                addclass("letter","valid");
                    removeclass("letter","invalid");
                    addclassicon("letter","fa-check");
                    removeclassicon("letter","fa-times");
              }
              else{
                addclass("letter","invalid");
                    removeclass("letter","valid");
                    addclassicon("letter","fa-times");
                    removeclassicon("letter","fa-check");
              }
              if(pswd.match(/[A-Z]/))
              {
                addclass("capital","valid");
                    removeclass("capital","invalid");
                    addclassicon("capital","fa-check");
                    removeclassicon("capital","fa-times");
              }
              else{
                addclass("capital","invalid");
                    removeclass("capital","valid");
                    addclassicon("capital","fa-times");
                    removeclassicon("capital","fa-check");
              }
              if(pswd.match(/\d/))
              {
                addclass("number","valid");
                    removeclass("number","invalid");
                    addclassicon("number","fa-check");
                    removeclassicon("number","fa-times");
              }
              else{
                addclass("number","invalid");
                    removeclass("number","valid");
                    addclassicon("number","fa-times");
                    removeclassicon("number","fa-check");
              }
            }
           