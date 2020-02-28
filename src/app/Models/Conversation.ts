﻿import { UserGroupRelation } from './UserGroupRelation';

export class Conversation {
    public id: number;
    public discriminator: string;
    public conversationCreateTime: Date;
    public displayName: string;
    public displayImagePath: string;
    public anotherUserId: string;
    public aesKey: string;
    public users: UserGroupRelation[];
    public avatarURL: string;
    public maxLiveSeconds: number;
}
