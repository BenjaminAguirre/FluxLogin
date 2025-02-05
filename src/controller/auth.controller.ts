import axios from "axios"

interface User {
    zelid: string,
    signature: string,
    loginPhrase: string,
}

export const authSspwallet = async (req: any, res: any) => {
    try {
        console.log(req.body);

        const response = await axios.post("https://api.runonflux.io/id/verifylogin", req.body, {
            headers: {
                "Content-Type": "text/plain"
            },
        })
        console.log(response.data);
        res.send(response.data);

    } catch (error) {
        res.status(401).send({ error });
    }
}

export const checkPrivilege = async (req: any, res: any) => {
    try {
        const user: User = req.body;
        const response = await axios.post("https://api.runonflux.io/id/checkprivilege", {
            user
          },
          {
            headers: {
              "Content-Type": "text/plain"
            }
          }
        )
        console.log(response);
        
        if(!response){
            res.status(401).send(response)
        }
        res.status(200).send(response)
        
    } catch (error) {
        res.status(400).send(error)
    }
}