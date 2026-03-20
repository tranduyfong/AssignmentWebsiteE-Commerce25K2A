
import { Button } from 'antd';

const PrimaryButton = ({ children, ...props }) => {
    return (
        <Button
            {...props}
            block
            size="large"
            style={{
                backgroundColor: '#febb0a',
                borderColor: '#febb0a',
                color: '#000',
                fontWeight: 'bold'
            }}
        >
            {children}
        </Button>
    );
};