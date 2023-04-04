import * as dynamoose from 'dynamoose';

dynamoose.aws.ddb.local();

const reportSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    flags: {
      type: Number,
      required: true,
    },
    recordDate: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const ReportSchema = dynamoose.model('reports', reportSchema);

export default ReportSchema;
