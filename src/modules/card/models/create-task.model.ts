export interface CreateTaskBody {
    cardId: string;
    jobName: string;
    assignedMembers: string[];
    createdAt: Date;
    endTime: Date;
}
