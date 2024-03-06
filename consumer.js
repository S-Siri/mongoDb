const consumerSchema = require("../models/consumermodel")

exports.addConsumer = async (req,res) => {
    const {AadharNo,FY,Age,Income,IncomefromInterest,InterestOnHomeLoan,RentalIncome,IncomeFromAssets,otherIncome,InterestOnDeposit,MedicalInsurance,DonationsToCharity,InterestOnEducationLoans,InterestOnHouseLoan,VariousSourcesOfIncome,FamilyMembers} = req.body

    const consumer = consumerSchema({
        AadharNo,FY,Age,Income,IncomefromInterest,InterestOnHomeLoan,RentalIncome,IncomeFromAssets,otherIncome,InterestOnDeposit,MedicalInsurance,DonationsToCharity,InterestOnEducationLoans,InterestOnHouseLoan,VariousSourcesOfIncome,FamilyMembers
    })
    try{
        if(!AadharNo || !FY ||!FamilyMembers ||!Income){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(Income<=0 ||!Income ==='number'){
            return res.status(400).json({message: 'All fields are required!'})
        }
        await consumer.save()
        res.status(200).json({message: 'consumer added'})
    }catch(error){
        return res.status(500).json({message: 'Server error'})
    }
}

exports.getConsumer = async(req,res)=>{
    try{
        const consumers=await consumerSchema.find().sort({createdAt: -1})
        res.status(200).json(consumers)
    }catch(error){
        return res.status(500).json({message: 'Server error'})
    }
}

exports.deleteConsumer = async(req,res)=>{
    const {id} = req.params;
    consumerSchema.findByIdAndDelete(id)
    .then((consumer) =>{
        res.status(200).json({message: 'Consumer Deleted'})
    })
    .catch((err)=>{
        res.status(500).json({message: 'Server Error'})
    })
}