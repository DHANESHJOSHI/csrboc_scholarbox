
export default function POST(req, res) {
    var data = req.body;
    
    

    res.status(200).json({ shopName: "Pizza Hurt" , billingName: "Shweta Nigam", amount: "1200₹" });
  }