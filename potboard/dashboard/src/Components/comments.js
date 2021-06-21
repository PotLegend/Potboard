import * as React from 'react';
import { 
    useListContext, 
    List,
    TextField, 
    DateField, 
    ReferenceField, 
    EditButton,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Edit, } from 'react-admin';
import { Card, CardActions, CardContent, CardHeader, Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

const cardStyle = {
    width: 350,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};

const CommentGrid = () => {
    const { ids, data, basePath } = useListContext();
    return (
        <div style={{ margin: '4em' }}>
        {ids.map(id =>
            <Card key={id} style={cardStyle}>
                <CardHeader
                    title={<TextField record={data[id]} source="author.name" />}
                    subheader={<DateField record={data[id]} source="created_at" />}
                    avatar={<Avatar icon={<PersonIcon />} />}
                />
                <CardContent>
                    <TextField record={data[id]} source="body" />
                </CardContent>
                <CardContent>
                    about&nbsp;
                    <ReferenceField label="Post" resource="comments" record={data[id]} source="post_id" reference="posts" basePath={basePath}>
                        <TextField source="title" />
                    </ReferenceField>
                </CardContent>
                <CardActions style={{ textAlign: 'right' }}>
                    <EditButton resource="posts" basePath={basePath} record={data[id]} />
                </CardActions>
            </Card>
        )}
        </div>
    );
};

export const CommentList = (props) => (
    <List title="All comments" {...props}>
        <CommentGrid />
    </List>
);


const CommentTitle = ({ record }) => {
    return <span>Comments {record ? `"${record.title}"` : ''}</span>;
};


export const CommentEdit = props =>(
    <Edit title={<CommentTitle/>} {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="author.name" />
            </ReferenceInput>
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);