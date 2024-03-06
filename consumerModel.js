const mongoose = require("mongoose");



const ConsumerSchema = new mongoose.Schema({
    AadharNo: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 20
    },
    FY: {
        type: String,
        required: true,
        trim: true,
        maxLength: 10
    },
    Age: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 10
    },
    Income: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 10
    },
    IncomefromInterest: {
        type: Number,
        // required: true,
        trim: true,
        maxLength: 10
    },
    InterestOnHomeLoan: {
        type: Number,
        // required: true,
        trim: true,
        maxLength: 10
    },
    RentalIncome: {
        type: Number,
        // required: true,
        trim: true,
        maxLength: 10
    },
    IncomeFromAssets: {
        type: Number,
        // required: true,
        trim: true,
        maxLength: 10
    },
    otherIncome: {
        type: Number,
        // required: true,
        trim: true,
        maxLength: 10
    },
    InterestOnDeposit: {
        type: Number,
        // required: true,
        trim: true,
        maxLength: 10
    },
    MedicalInsurance: {
        type: Number,
        // required: true,
        trim: true,
        maxLength: 10
    },
    DonationsToCharity: {
        type: Number,
        // required: true,
        trim: true,
        maxLength: 10
    },
    InterestOnEducationLoans: {
        type: Number,
        // required: true,
        trim: true,
        maxLength: 10
    },
    InterestOnHouseLoan: {
        type: Number,
        // required: true,
        trim: true,
        maxLength: 10
    },
    VariousSourcesOfIncome: {
        type: Number,
        // required: true,
        trim: true,
        maxLength: 10
    },
    FamilyMembers: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 10
    },
},{timestamp: true})

module.exports = mongoose.model('Consumer',ConsumerSchema)