import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({ checkoutToken }) => {
    return (
        <div>
            <Typography variant="h6" gutterBotttom>Order Summary</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style={{ padding: '10px 0' }} key={product.name}>
                        <listItemText primary={product.name} secondary={`Quanuitiy: ${product.quanity}`} />
                        <Typography variant="boby2">{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <listItem style={{ padding: '10px 0' }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" Style={{ fontWeight: 700 }}>
                        {checkoutToken.live.subtotal.formatted_with_symbol}
                    </Typography>

                </listItem>

            </List>
        </div>
    )
}

export default Review
