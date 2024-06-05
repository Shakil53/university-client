import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { sidebarItemsGenerators } from '../../utils/sidebarItemsGenerators';
import { adminPaths } from '../../routes/admin.routes';


const Sidebar = () => {
    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        
      >
        <div style={{
          color: 'white',
          textAlign: 'center',
          height: '4rem',
          padding: '15px',
          
        }}>
          <h1>University SH</h1>
        </div> 
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItemsGenerators(adminPaths, 'admin')} />
      </Sider>
    );
};

export default Sidebar;