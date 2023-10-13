import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Popper } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { myPages } from '../../../shared/constants';
import { StyledLink, StyledAppBar, StyledPaper } from './Header.styled'
import Link from 'next/link';

const HeaderComponent = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };


  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <header>
      <StyledAppBar position="static" >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* <Box sx={{ flexGrow: 1, display: 'flex' }}>
            {myPages.map((page) => (
              <Button
                key={page.key}
                sx={{ my: 3, color: 'white', display: 'block' }}
              >
                {page.text}
              </Button>
            ))}
          </Box> */}
          <div>
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? 'composition-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              sx={{ color: 'black' }}
            >
              <MenuIcon />
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom-start' ? 'left top' : 'left bottom',
                  }}
                >
                  <StyledPaper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        {myPages.map((page) => (
                          <MenuItem key={page.id} onClick={handleClose}>
                            <Link href={`/#${page.id}`}>{page.text}</Link>
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </StyledPaper>
                </Grow>
              )}
            </Popper>
          </div>
          <div>
            <StyledLink href='/'>Natalia Ivantsova</StyledLink>
          </div>
        </Toolbar>
      </StyledAppBar>
    </header >
  )
}

export default HeaderComponent;