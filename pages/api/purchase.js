// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import purchaseModal from "../../models/purchasemodel";
import mongoose from 'mongoose';

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
  .then(() => (
    app.listen(PORT, () => console.log(`Server is Running`))
    ),)
  .catch((error) => console.log(`${error} did not connect`));


export default async function inputPurchase(req, res) {
  const { email, name, pesanan, total, reason } = req.body;
  console.log(req.body)
  try {
    const result = await purchaseModal.create({ email, name, pesanan, total, reason, isPaid:false, createdAt: new Date(), updatedAt: new Date()});
    res.status(200).json({ message: "Success"});
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
}
