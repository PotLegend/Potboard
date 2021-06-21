import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';


// By default, react-admin displays the list page of the first 
// Resource element as home page. If you want to display a custom 
// component instead, pass it in the dashboard prop of the <Admin> component.

export default () => (
    <Card>
        <CardHeader title="Wellcome to the administration" />
        <CardContent>Lorem Ispum sic dolor amet...</CardContent>
    </Card>
);
