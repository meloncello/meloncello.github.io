import React from "react";
import pic from "./pics/pandaman.jpg"

export default function P404(): JSX.Element {
    const body = document.getElementsByTagName("body").item(0);
    if (body != null)
      body.setAttribute("style", "background-color:black");
    return (
        <div style={{
            color: "red",
            textAlign: "center",
            fontSize: "80px",
            marginTop: "30px",
            backgroundColor: "black"
        }}>

        <img src={pic}
             style={{
                alignContent: "center",
                width: "30%",
                height: "30%",

             }}></img>





            Ȩ̵͔͚̩̰͍́̄̐͂̇͝͝R̶̡̨̢̪͎̯̜̠̭͔̹͎͎̩͑̒̒͗̎̒́̈̾̆̈́̉̍̓̐̑̕͝͠R̶̛̳̙̩̮͒́̓̑̉̌͑̓̉͂͠Ǫ̵̬̞̲̖̜͓̤̜̜̣̬̠̖̥̯̬͉̟̀̀̐̔̇̾̿͜R̵̛͉̜̽̍̇̽̎̔̅̿͂͛̀͛͂̑͛̄͘ͅ ̵̛̣̫̤̗͇̖̭̝̳̭̠̈́́͗̿̆̓̅͊̔͆̒͜ͅ4̸̡̠̳̗̞̮̺̭̙̬̪͚̻̣̻͓͙̖̔̾̔̋͆́͘̚͠ͅ0̴̡̝͚͕͎̖̩̬͚͍͙̝̺̟̱͉̫͛̈́͐͗̌͛̈̃̓͒̀͜4̴̧̺̰̼̱̰̟̞͕̪̜̱͎̠̮̹̙̠̣̍̈́̏̑̈́́͆͗̌͛̆̀͜͠͠͠ ̵̧̛͓̯̻̼̟̳̘̺̞̀̂͛̿̿͑̎̂̔̋͌͌́͘̕͝ͅ




        </div>
    );
}