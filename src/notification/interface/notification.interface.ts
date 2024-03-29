export interface notification {
  messageId: string;
  smsId: string;
  campaignTrackingId: string;
  part: number;
  parts: number;
  label: string;
  to: string;
  from: string;
  country: string;
  operator: string;
  groups: [string];
  campaignName: string;
  status: {
    name: string;
    reason: {
      detailedStatus: string;
      description: string;
    };
    updatedDate: string;
  };
  message: string;
  applicationName: string;
  latency: number;
  price: number;
  direction: string;
  originatingService: string;
}
