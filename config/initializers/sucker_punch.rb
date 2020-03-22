# SuckerPunch is an in-process background worker. It's cheaper than running a separate process on Heroku for now.
# https://github.com/brandonhilkert/sucker_punch

SuckerPunch.exception_handler = -> (ex, klass, args) { Raven.capture_exception(ex) }
