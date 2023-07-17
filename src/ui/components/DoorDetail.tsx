import Typography from '@mui/material/Typography';
import { Door } from '@/models/Door';
import { DetailPageContainer } from '@/ui/layout/DetailPageContainer';
import { DetailPageItem } from '@/ui/layout/DetailPageItem';
import { CONNECTION_STATUSES_COLORS } from '@/ui/constants/ConnectionStatusesColors';
import { getLocaleString } from '@/lib/dateTime';

interface DoorDetailProps {
  door: Door;
}

export function DoorDetail({ door }: DoorDetailProps) {
  const connectionStatusColor =
    CONNECTION_STATUSES_COLORS[door.connectionStatus];
  const lastConnectionStatusUpdate =
    getLocaleString(door.lastConnectionStatusUpdate) || 'n/a';
  return (
    <DetailPageContainer>
      <DetailPageItem label="ID">
        <Typography>{door.id}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Building">
        <Typography>{door.buildingName}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Apartment">
        <Typography>{door.apartmentName}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Connection type">
        <Typography>{door.connectionType}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Connection status">
        <Typography color={connectionStatusColor}>
          {door.connectionStatus}
        </Typography>
      </DetailPageItem>
      <DetailPageItem label="Last connection status update">
        <Typography>{lastConnectionStatusUpdate}</Typography>
      </DetailPageItem>
    </DetailPageContainer>
  );
}
