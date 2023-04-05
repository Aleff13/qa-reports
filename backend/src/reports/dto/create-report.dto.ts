import { ApiProperty } from '@nestjs/swagger';

export class CreateReportDto {
  @ApiProperty({
    description: 'description',
    minimum: 240,
    default: '',
  })
  description: string;

  @ApiProperty({
    description: 'flag quantity',
    minimum: 240,
    default: '',
  })
  flags: number;

  @ApiProperty({
    description: 'test case quantity',
    minimum: 240,
    default: '',
  })
  testCases: number;

  @ApiProperty({
    description: 'report type',
    minimum: 240,
    default: '',
  })
  type: string;

  @ApiProperty({
    description: 'report type',
    minimum: 240,
    default: '',
  })
  recordDate: number;
}
